import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import fetchApi from "../states/fetchApi";
export interface IWords {
  page: number;
  keyword: string;
  year: number;
}

// 오늘의 단어 조회
export async function fetchTodayWord() {
  try {
    const response = await fetchApi.get("/api/dictionary/v1/today/word");
    console.log("오늘의 단어단어", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
}

//  단어 디테일 조회
export async function fetchDetail(wordId: number) {
  try {
    const response = await fetchApi.get(`/api/dictionary/v1/word/${wordId}`);
    console.log("단어 디테일", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
}
//  단어 스크랩
export async function scrapWord(wordId: number) {
  try {
    const response = await fetchApi.post(`/api/dictionary/word/scrap/${wordId}`);
    console.log("단어 스크랩 성공", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
}
//  단어 스크랩 취소
export async function deleteScrapWord(wordId: number) {
  try {
    const response = await fetchApi.delete(`/api/dictionary/word/cancel/${wordId}`);
    console.log("단어 스크랩 취소", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
}
// 전체 단어 조회 (페이지네이션)
export async function fetchWords(pageNum: number, input: string, yearinput: number) {
  try {
    const response = await fetchApi.post("/api/dictionary/v1/word/list", {
      page: pageNum,
      keyword: input,
      year: yearinput,
    });
    console.log("단어", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
}

// 저장한 단어 조회 (페이지네이션)
export async function fetchMyWords(pageNum: number, category: number) {
  try {
    const response = await fetchApi.post("/api/voca/list", {
      page: pageNum,
      category: category,
    });
    console.log("스크랩한 단어", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
}
// 출제가 가능한 단어인지 검사
export async function validWord(word: string) {
  try {
    const response = await fetchApi.post(`/api/problem/valid/${word}`);
    console.log("단어 사용 가능!", response.data);
    return true;
  } catch (error) {
    console.log("단어 검사 실패");
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    return false;
  }
}

// 문제 출제
export async function postProblem(newProblem: object) {
  try {
    const response = await fetchApi.post("/api/problem/register", newProblem);
    console.log("문제등록 성공", response.data);
    return response.data;
  } catch (error) {
    console.log("문제등록 실패");
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
}
