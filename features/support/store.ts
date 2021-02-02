export function Store(callback: { (...args: any[]): void }) {
  let result: any[];
  return (target: any, name?: string, descriptor?: any) => {
    Object.getOwnPropertyNames(target.__proto__).forEach(
      (methodName: string) => {
        const original = target.__proto__[methodName];
        if (typeof original !== "function" || methodName === "constructor") {
          return;
        }
        target.__proto__[methodName] = function (...args: any[]) {
          const ret = original.apply(this, args);
          callback(...args);
          return ret;
        };
      }
    );
    return target;
  };
}
