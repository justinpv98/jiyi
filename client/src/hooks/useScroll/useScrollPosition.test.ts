import { renderHook, act, fireEvent } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import {
  useScrollPosition,
  useScrollPositionX,
  useScrollPositionY,
} from "./useScrollPosition";

describe("useScrollPosition", () => {
  it("should return the current scroll position", () => {
    const { result } = renderHook(() => useScrollPosition());

    expect(result.current).toEqual({ x: 0, y: 0 });
  });

  it("should update the scroll position when the user scrolls", async () => {
    const { result } = renderHook(() => useScrollPosition());

    await act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100, scrollX: 100 } });
    });

    await wait(
      () => {
        expect(result.current).toEqual({ x: 100, y: 100 });
      },
      { timeout: 200 }
    );
  });
});

describe("useScrollPositionY", () => {
  it("should return the current scroll position", () => {
    const { result } = renderHook(() => useScrollPositionY());

    expect(result.current).toEqual(0);
  });

  it("should update the scroll position when the user scrolls", async () => {
    const { result } = renderHook(() => useScrollPositionY());

    await act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });

    await wait(
      () => {
        expect(result.current).toEqual(100);
      },
      { timeout: 200 }
    );
  });
});

describe("useScrollPositionX", () => {
  it("should return the current scroll position", () => {
    const { result } = renderHook(() => useScrollPositionX());

    expect(result.current).toEqual(0);
  });

  it("should update the scroll position when the user scrolls", async () => {
    const { result } = renderHook(() => useScrollPositionX());

    await act(() => {
      fireEvent.scroll(window, { target: { scrollX: 100 } });
    });

    await wait(
      () => {
        expect(result.current).toEqual(100);
      },
      { timeout: 200 }
    );
  });
});
