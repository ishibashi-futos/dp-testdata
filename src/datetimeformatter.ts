import DateTime from "./datetime"

/** 利用可能なフォーマット. */
export type FormatType = "yyyyMMddHHmmssSSS" | "yyyyMMdd" | "HHmmssSSS" //| "yyyy" | "MM" | "dd" | "HH" | "mm" | "ss" | "SSS"
/** フォーマット関数. */
type Format = (dateTime: DateTime) => string
/** Parse関数. */
type Parse = (dateTime: string) => DateTime
/** フォーマット関数とParserを合わせたフォーマッタ定義. */
export type Formatter = {
  format: Format
  parse: Parse
}

export default class DateTimeFormatter {
  private static readonly yyyyMMdd = {
    format: (dt: DateTime) => {
      return DateTimeFormatter.getYear(dt) + DateTimeFormatter.getMonth(dt) + DateTimeFormatter.getDays(dt)
    },
    parse: (dateTime: string): DateTime => {
      // ToDo: parse処理を実装する
      // Lengthチェック, 数値チェックをかけて、あとはSplitしてコンストラクタに投げる.
      return new DateTime()
    }
  }

  private static readonly hhmmssSSS = {
    format: (dt: DateTime) => {
      return DateTimeFormatter.getHours(dt) + DateTimeFormatter.getMinutes(dt) + DateTimeFormatter.getSeconds(dt) + DateTimeFormatter.getMiliseconds(dt)
    },
    parse: (dateTime: string) => {
      // ToDo: parse処理を実装する
      // Lengthチェック, 数値チェックをかけて、あとはSplitしてコンストラクタに投げる.
      return new DateTime()
    }
  }

  /**
   * DateTimeFormatter唯一のファクトリメソッドです.
   * 
   * @param format 出力するフォーマット文字列.
   */
  public static ofPattern(format: FormatType): Formatter {
    switch (format) {
      case "yyyyMMdd":
        return DateTimeFormatter.yyyyMMdd
      case "HHmmssSSS":
        return DateTimeFormatter.hhmmssSSS
      case "yyyyMMddHHmmssSSS":
        return {
          format: (dt: DateTime) => {
            return DateTimeFormatter.yyyyMMdd.format(dt) + DateTimeFormatter.hhmmssSSS.format(dt)
          },
          parse: (datetime: string) => {
            // ToDo: parse処理を実装する
            // Lengthチェック, 数値チェックをかけて、あとはSplitしてコンストラクタに投げる.
            return new DateTime()
          }
        }
      default:
        throw new InvalidFormatException()
    }
  }

  private static getYear(dt: DateTime): string {
    return dt.getFullYear().toString()
  }

  private static getMonth(dt: DateTime): string {
    return DateTimeFormatter.padString(dt.getMonth())
  }

  private static getDays(dt: DateTime): string {
    return DateTimeFormatter.padString(dt.getDate())
  }

  private static getHours(dt: DateTime): string {
    return DateTimeFormatter.padString(dt.getHours())
  }

  private static getMinutes(dt: DateTime): string {
    return DateTimeFormatter.padString(dt.getMinutes())
  }

  private static getSeconds(dt: DateTime): string {
    return DateTimeFormatter.padString(dt.getSeconds())
  }

  private static getMiliseconds(dt: DateTime): string {
    return DateTimeFormatter.padString(dt.getMilliseconds(), 3, "000")
  }

  protected static padString(num: number, maxLength: number = 2, fillString: string = "00"): string {
    return num.toString().padStart(maxLength, fillString)
  }
}

export class InvalidFormatException extends Error {

}

/**
 * 与えられた文字列が数値に変換可能かチェックする.
 * @param str 
 */
function isNumber(str: any): str is number {
  if (!(typeof str === 'string')) return false;
  // 2進数や16進数が入力された場合、数値として扱わないため.
  return !str.split("").some(n=> {
    // 要素がisNaN判定されたらbreakする
    return isNaN(Number(n))
  })
}
