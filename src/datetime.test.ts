import DateTime, {Day, Month, InvalidDateException} from "./datetime";
import {MESSAGES} from "./dpmessages"

describe("dateTimeのテスト", () => {
  test("コンストラクタにパラメータを指定しない場合でも、初期化に成功する", () => {
    const dt = new DateTime()
    // DateTimeのインスタンスとして認識される
    expect(dt).toBeInstanceOf(DateTime)
    // Dateのインスタンスとしても認識される
    expect(dt).toBeInstanceOf(Date)
  })

  describe("コンストラクタにオプションを指定する", () => {
    test("yearを指定する", () => {
      const year = 2020
      const dt = new DateTime({year: year})
      expect(dt.getFullYear()).toBe(year)
    })

    describe("monthを指定する", () => {
      test("12月を指定する", () => {
        const month = 12
        const dt = new DateTime({month})
        expect(dt.getMonth()).toBe(month)
      })
      test("1月を指定する", () => {
        const month = 1
        const dt = new DateTime({month})
        expect(dt.getMonth()).toBe(month)
      })
    })

    describe("dayを指定する", () => {
      const dates: Day[] = [1, 30, 31]
      test.each(dates)("%i日を指定した場合", (d) => {
        if (d != undefined) {
          const dt = new DateTime({month: 1, day: d})
          expect(dt.getDate()).toBe(d)
        }
      })
    })
  })

  describe("overrideした関数のテスト", () => {
    describe("日付を入力する", () => {
      test.each([0, 32, -1, 0.1])("日付入力時に不正な%i値を入力する", (d) => {
        const dt = new DateTime({month: 5, day: 1})
        expect(() => {
          dt.setDate(d)
          expect(true).toBeFalsy()
        }).toThrowError(InvalidDateException)
      })

      test.each([2, 4, 6, 9, 11] as Month[])("日付に31日を指定するとエラーになる: %i月", (m) => {
        const dt = new DateTime({month: m, day: 1})
        expect(() => {
          dt.setDate(31)
        }).toThrowError(MESSAGES.ERROR.InvalidDayWithout31Day)
      })

      test.each([1, 2, 3, 4, 27, 28, 29, 30])("日付を設定する: %i日", (d) => {
        const months: Month[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        months.forEach(m => {
          if (m === 2 && d >= 28) {
            // 2月のうるう年を考慮し、28以降はテストしない.
          } else {
            const dt = new DateTime({month: m})
            dt.setDate(d)
            expect(dt.getMonth()).toBe(m)
            expect(dt.getDate()).toBe(d)
          }
        })
      })

    })
  })
})
