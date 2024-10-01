import { UnparsedObject } from "../../packages/datadog-api-client-common/util";

const RESERVED_KEYWORDS = [
  "abstract",
  "await",
  "boolean",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "double",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "final",
  "finally",
  "float",
  "for",
  "function",
  "goto",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "int",
  "interface",
  "let",
  "long",
  "native",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "short",
  "static",
  "super",
  "switch",
  "synchronized",
  "this",
  "throw",
  "transient",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "volatile",
  "while",
  "with",
  "yield",
]

declare global {
  interface String {
    templated(data: { [key: string]: any }): string;
    toOperationName(): string;
    toAttributeName(): string;
  }
}

interface IIndexable<T = any> {
  [key: string]: T;
}

const templateFunctions: { [key: string]: any } = {
  timeISO: relativeTime(true),
  timestamp: relativeTime(false),
};

function relativeTime(iso: boolean): any {
  const timeRE = /now( *([+-]) *(\d+)([smhdMy]))?/;
  return (data: any, arg: string): string => {
    const ret = new Date(data["now"]);
    const m = arg.match(timeRE);
    if (m) {
      if (m[1]) {
        const num = parseInt(m[2] + m[3]);
        const unit = m[4];
        switch (unit) {
          case "s":
            ret.setUTCSeconds(ret.getUTCSeconds() + num);
            break;
          case "m":
            ret.setUTCMinutes(ret.getUTCMinutes() + num);
            break;
          case "h":
            ret.setUTCHours(ret.getUTCHours() + num);
            break;
          case "d":
            ret.setUTCDate(ret.getUTCDate() + num);
            break;
          case "M":
            ret.setUTCMonth(ret.getUTCMonth() + num);
            break;
          case "y":
            ret.setUTCFullYear(ret.getUTCFullYear() + num);
            break;
        }
      }
      if (iso) return ret.toISOString();
      return Math.floor(ret.getTime() / 1000).toString();
    }
    return "";
  };
}

function pathLookup(data: any, dottedPath: string): any {
  let result = data;
  for (const dotPath of dottedPath.split(".")) {
    if (dotPath === "") {
      continue;
    }
    for (const part of dotPath.split("[")) {
      if (part.includes("]")) {
        const results = result as any[];
        result = results[parseInt(part)];
      } else {
        const value = result as IIndexable;
        if (part in value) {
          result = value[part];
        } else if (part.toAttributeName() in value) {
          result = value[part.toAttributeName()];
        } else if (value instanceof UnparsedObject && part in value["_data"]) {
          result = value["_data"][part];
        } else if (RESERVED_KEYWORDS.includes(part) && "_"+part in value) {
          result = value["_"+part];
        } else {
          throw new Error(
            `${part} not found in ${JSON.stringify(
              result
            )} (started from ${dottedPath} in ${JSON.stringify(data)})`
          );
        }
      }
      if (result instanceof UnparsedObject) {
        result = result["_data"]
      }
    }
  }

  return result;
}

function getTypeForValue(pathResult: any): string {
  let _type: string = "";

  if (pathResult?.constructor?.name) {
    if (pathResult.constructor?.name == "Array") {
      if (pathResult[0]?.constructor?.name) {
        _type = `Array<${getTypeForValue(pathResult[0])}>`
      }
    } else {
      _type = pathResult.constructor.name
    }
  }
  return _type;
}

String.prototype.templated = function (data: { [key: string]: any }): string {
  const regexp = /{{ *([^{}]+|'[^']+'|"[^"]+") *}}/g;
  const function_re = /^(.+)\((.*)\)$/;
  return String(this).replace(regexp, function (...matches) {
    const path = matches[1].trim();
    const m = path.match(function_re);
    if (m) {
      return templateFunctions[m[1]](data, m[2]);
    }
    if (path[0] === "'" || path[0] === '"') {
      return path.slice(1, -1);
    }
    return pathLookup(data, path);
  });
};

String.prototype.toOperationName = function (): string {
  const s = String(this);
  return s.charAt(0).toLowerCase() + s.slice(1);
};

String.prototype.toAttributeName = function (): string {
  let val = String(this)
    .replace(/[^A-Za-z0-9]+(.)/g, function (...matches) {
      return matches[1].toUpperCase();
    })
    .replace(/[^A-Za-z0-9]+/g, "");

  return val.charAt(0).toLowerCase() + val.slice(1);
};

function getProperty<T, K extends keyof T>(obj: T, name: string): T[K] {
  const key = name as K;
  return obj[key];
}

export { pathLookup, getProperty, getTypeForValue };
