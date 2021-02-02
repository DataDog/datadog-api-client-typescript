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
            `${part} not found in ${result} (started from ${dottedPath} in ${data})`
          );
        }
      }
    }
  }
  return result;
}

String.prototype.templated = function (data: Object): string {
  const regexp = /{{ *([^} ]+) *}}/g;
  return String(this).replace(regexp, function (...matches) {
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
  if (typeof value === 'object') {
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
