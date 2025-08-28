import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import errorMd from "@/error.md?raw";

interface MarkdownFile {
  fileName: string;
  content: string;
  date: number;
}

function assertIsMarkdownFile(data: unknown): asserts data is MarkdownFile {
  if (typeof data !== "object" || data === null) {
    throw new Error("Не валидные данные");
  }

  const obj = data as Record<string, unknown>;
  console.log(obj);
  if (typeof obj.content !== "string") {
    throw new Error("Не валидные данные");
  }
  if (typeof obj.date !== "number") {
    throw new Error("Не валидные данные");
  }
  if (typeof obj.fileName !== "string") {
    throw new Error("Не валидные данные");
  }
}

const initialState: asyncState<MarkdownFile> = {
  loading: false,
  error: "",
  value: {
    date: 0,
    content: "",
    fileName: "",
  },
};

interface asyncState<T> {
  loading: boolean;
  error: string;
  value: T;
}

export const BookSlice = createSlice({
  name: "Book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarkdown.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchMarkdown.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchMarkdown.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload || "Необявленная ошибка";
        state.value = {
          date: 0,
          content: errorMd,
          fileName: "ОШИБКА",
        }
      });
  },
});

export const fetchMarkdown = createAsyncThunk<
  MarkdownFile,
  string,
  { rejectValue: string }
>("Book/fetchMarkdown", async (fileName, thunkAPI) => {
  try {
    const response = await fetch("/api/v1/documentation/md/" + fileName);
    if (!response.ok) {
      return thunkAPI.rejectWithValue("Не удалось загрузить статью");
    }
    const data: unknown = await response.json();
    assertIsMarkdownFile(data);
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Не удалось загрузить статью");
  }
});

export default BookSlice.reducer;
