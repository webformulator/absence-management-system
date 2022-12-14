import { AbsencesApiResponse, MembersApiResponse } from "./api-response.types";
import { Absence, Member, MemberMap } from "./resource.types";
import { GlobalState } from "./state.types";

// Type for getMembers()
export interface GetMembers {
  (): Promise<MembersApiResponse>;
}
// Type for getAbsences()
export interface GetAbsences {
  (
    page?: number,
    type?: string,
    date?: string,
    limit?: number
  ): Promise<AbsencesApiResponse>;
}
// Type for getDate()
export interface GetDate {
  (date: string): string;
}
// Type for reducer()
export interface Reducer {
  (state: GlobalState, action: { type: string; payload?: any }): GlobalState;
}
// Type for range()
export interface CustomRange {
  (start: number, end: number): number[];
}
// Type for getPages()
export interface GetPages {
  (currentPage: number, totalPages: number, maxNumberPages?: number): number[];
}
// Type for handlePageChange()
export interface HandlePageChange {
  (page: number): void;
}
export interface HandleFilter {
  (reset?: boolean, newState?: { type?: string; date?: string }): void;
}
// Type for generateRandomNumber()
export interface GenerateRandomNumber {
  (): number;
}
// Type for getStatus()
export interface GetStatus {
  (rejectedAt: string | null, confirmedAt: string | null): string;
}
// Type for getMaxPages()
export interface GetMaxPages {
  (): number;
}
// Type for memberReducer()
export interface MemberReducer {
  (memberMap: MemberMap, member: Member): MemberMap;
}
// Type for getMembersAndAbsences()
export interface GetMembersAndAbsences {
  (page: number, type: string, date: string, limit: number): Promise<{
    absences: Absence[];
    memberMap: MemberMap;
    count: number;
    totalCount: number;
  }>;
}
