import DateTimeFormatter, {InvalidFormatException} from "./datetimeformatter"
import DateTime from "./datetime"

describe("DateTimeFormatterのテスト", () => {
  describe("yyyyMMdd", () => {
    const formatter = DateTimeFormatter.ofPattern("yyyyMMdd")
    test("yyyyMMddに変換する", () => {
      const dt = new DateTime({year: 2020, month: 5, day: 6})
      expect(formatter.format(dt)).toBe("20200506")
    })

    test("yyyyMMddに変換する(padなし)", () => {
      const dt = new DateTime({year: 1992, month: 11, day: 16})
      expect(formatter.format(dt)).toBe("19921116")
    })

    describe("yyyyMMddの文字列からDateTimeに変換する", () => {
      test("parseに成功する", () => {
        const str = "20200506"
        const dt = formatter.parse(str)
        expect(dt.getFullYear()).toBe(2020)
        expect(dt.getMonth()).toBe(5)
        expect(dt.getDate()).toBe(6)
      })

      test("長さが足りずエラーになる", () => {
        const str = "2020"
        expect(() => {
          formatter.parse(str)
        }).toThrowError(InvalidFormatException)
      })

      test("長さは足りるが数値以外が含まれておりエラーになる", () => {
        const str = "yyyyMMdd"
        expect(() => {
          formatter.parse(str)
        }).toThrowError(InvalidFormatException)
      })
    })
  })

  describe("HHmmssSSS", () => {
    const formatter = DateTimeFormatter.ofPattern("HHmmssSSS")
    test("HHmmssSSSに変換する(padあり)", () => {
      const dt = new DateTime({hour: 5, minute: 6, second: 7, mills: 8})
      expect(formatter.format(dt)).toBe("050607008")
    })
    test("HHmmssSSSに変換する(padなし)", () => {
      const dt = new DateTime({hour: 23, minute: 59, second: 59, mills: 999})
      expect(formatter.format(dt)).toBe("235959999")
    })

    describe("HHmmssSSSの文字列からDateTimeに変換する", () => {
      test("parseに成功する", () => {
        const str = "050607008"
        const dt = formatter.parse(str)
        expect(dt.getHours()).toBe(5)
        expect(dt.getMinutes()).toBe(6)
        expect(dt.getSeconds()).toBe(7)
        expect(dt.getMilliseconds()).toBe(8)
      })

      test("長さが足りずエラーになる", () => {
        const str = "0506"
        expect(() => {
          formatter.parse(str)
        }).toThrowError(InvalidFormatException)
      })

      test("長さは足りるが数値以外が含まれておりエラーになる", () => {
        const str = "HHmmssSSS"
        expect(() => {
          formatter.parse(str)
        }).toThrowError(InvalidFormatException)
      })
    })
  })

  describe("yyyyMMddHHmmssSSS", () => {
    const formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS")
    test("yyyyMMddHHmmssSSSに変換する(padあり)", () => {
      const dt = new DateTime({year: 2020, month: 5, day: 6, hour: 5, minute: 6, second: 7, mills: 8})
      expect(formatter.format(dt)).toBe("20200506050607008")
    })
    test("yyyyMMddHHmmssSSSに変換する(padなし)", () => {
      const dt = new DateTime({year: 1992, month: 11, day: 16, hour: 23, minute: 59, second: 59, mills: 999})
      expect(formatter.format(dt)).toBe("19921116235959999")
    })
  })
})
