declare global {
  interface String {
    templated(data: Object): string;
    toOperationName(): string;
    toAttributeName(): string;
  }
}

interface IIndexable<T = any> {
  [key: string]: T;
}

const templateFunctions: { [key: string]: any } = {
  "timeISO": relativeTime(true),
  "timestamp": relativeTime(false),
}

function relativeTime(iso: boolean): any {
  const timeRE = /now( *([+-]) *(\d+)([smhdMy]))?/
  return (data: any, arg: string): string => {
    let ret = new Date(data["now"])
    const m = arg.match(timeRE)
    if (m) {
      if (m[1]) {
        const num = parseInt(m[2] + m[3])
        const unit = m[4]
        switch (unit) {
          case "s":
            ret.setSeconds(ret.getSeconds()+num);
            break;
          case "m":
            ret.setMinutes(ret.getMinutes()+num);
            break;
          case "h":
            ret.setHours(ret.getHours()+num);
            break;
          case "d":
            ret.setDate(ret.getDate()+num);
            break;
          case "M":
            ret.setMonth(ret.getMonth()+num);
            break;
          case "y":
            ret.setFullYear(ret.getFullYear()+num);
            break;
        }
      }
      if (iso) return ret.toISOString()
      return (Math.floor(ret.getTime() / 1000)).toString()
    }
    return ""
  }
}

function pathLookup(data: any, dottedPath: string): any {
  let result = data;
  for (const dotPath of dottedPath.split(".")) {
    for (const part of dotPath.split("[")) {
      if (part.includes("]")) {
        const results = result as Object[];
        result = results[parseInt(part)];
      } else {
        const value = result as IIndexable;
        if (part in value) {
          result = value[part];
        } else if (part.toAttributeName() in value) {
          result = value[part.toAttributeName()];
        } else {
          throw new Error(
            `${part} not found in ${JSON.stringify(result)} (started from ${dottedPath} in ${JSON.stringify(data)})`
          );
        }
      }
    }
  }
  return result;
}

String.prototype.templated = function (data: Object): string {
  const regexp = /{{ *([^}]+) *}}/g;
  const function_re = /^(.+)\((.*)\)$/;
  return String(this).replace(regexp, function (...matches) {
    const path = matches[1].trim()
    const m = path.match(function_re)
    if (m) {
      return templateFunctions[m[1]](data, m[2])
    }
    return pathLookup(data, matches[1]);
  });
};

String.prototype.toOperationName = function (): string {
  const s = String(this);
  return s.charAt(0).toLowerCase() + s.slice(1);
};

String.prototype.toAttributeName = function (): string {
  return String(this).replace(/[^A-Za-z0-9](.)/g, function (...matches) {
    return matches[1].toUpperCase();
  }).replace(/[^A-Za-z0-9]+/g, '');
};

function getProperty<T, K extends keyof T>(obj: T, name: string): T[K] {
  let key = name as K;
  return obj[key];
}

function fixKeys(key: string, value: any) {
  if (typeof value === 'object' && value != null) {
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
