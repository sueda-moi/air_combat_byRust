export function getErrorMessage(e: unknown): string {
  if (e instanceof Error) {
    return e.message;
  }

  if (typeof e === "string") {
    return e;
  }

  if (typeof e === "object" && e !== null && "message" in e) {
    const maybeError = e as { message?: unknown };
    if (typeof maybeError.message === "string") {
      return maybeError.message;
    }
  }

  return "未知错误";
}
