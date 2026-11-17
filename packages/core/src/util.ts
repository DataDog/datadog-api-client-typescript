import { version } from "./version";

const unparsedObjectBrand: unique symbol = Symbol.for(
  "datadog-api-client.UnparsedObject",
);

export class UnparsedObject {
  readonly [unparsedObjectBrand] = true;
  _data: any;
  constructor(data: any) {
    this._data = data;
  }
}

export type AttributeTypeMap = {
  [key: string]: {
    baseName: string;
    type: string;
    required?: boolean;
    format?: string;
  };
};

/** @internal */
export function isUnparsedObject(value: any): boolean {
  return value?.[unparsedObjectBrand] === true;
}

/** @internal */
export type ModelTypingInfo = {
  enumsMap: { [key: string]: any[] };
  typeMap: { [index: string]: any };
  oneOfMap: { [index: string]: any };
};

/** @internal */
export const isBrowser: boolean =
  typeof window !== "undefined" && typeof window.document !== "undefined";

export const isNode: boolean =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

export class DDate extends Date {
  originalDate: string | undefined;
}

const RFC3339Re =
  /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})\.?(\d+)?(?:(?:([+-]\d{2}):?(\d{2}))|Z)?$/;
export function dateFromRFC3339String(date: string): DDate {
  const m = RFC3339Re.exec(date);
  if (m) {
    const _date = new DDate(date);
    _date.originalDate = date;
    return _date;
  } else {
    throw new Error("unexpected date format: " + date);
  }
}

export function dateToRFC3339String(date: Date | DDate): string {
  const originalDate = (date as DDate).originalDate;
  if (originalDate) {
    return originalDate;
  }
  return date.toISOString().split(".")[0] + "Z";
}

/** @internal */
export function buildUserAgent(
  packageId: string,
  packageVersion: string,
): string {
  const product = `datadog-api-client-typescript/${packageId}/${packageVersion} core/${version}`;
  if (isNode) {
    return `${product} (node ${process.versions.node}; os ${process.platform}; arch ${process.arch})`;
  }
  return `${product} (runtime unknown)`;
}
