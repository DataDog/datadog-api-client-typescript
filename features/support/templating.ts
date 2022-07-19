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
        } else if ("unparsedObject" in value && part in value["unparsedObject"]) {
          result = value["unparsedObject"][part];
        } else {
          throw new Error(
            `${part} not found in ${JSON.stringify(
              result
            )} (started from ${dottedPath} in ${JSON.stringify(data)})`
          );
        }
      }
    }
  }
  return result;
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
  return String(this)
    .replace(/[^A-Za-z0-9]+(.)/g, function (...matches) {
      return matches[1].toUpperCase();
    })
    .replace(/[^A-Za-z0-9]+/g, "");
};

function getProperty<T, K extends keyof T>(obj: T, name: string): T[K] {
  const key = name as K;
  return obj[key];
}

function fixKeys(key: string, value: any): void {
  if (typeof value === "object" && value != null) {
    const keys = Object.keys(value);
    keys.forEach((k) => {
      if (k.toAttributeName() != k) {
        value[k.toAttributeName()] = value[k];
        delete value[k];
      }
    });
  }
  return value;
}

export { pathLookup, getProperty, fixKeys };
