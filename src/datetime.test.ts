import DateTime, {Day, InvalidDateException} from "./datetime";

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
    })
  })
})
