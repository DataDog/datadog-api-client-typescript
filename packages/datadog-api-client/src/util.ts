import { version } from "./version";

export class UnparsedObject {
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

export type ModelTypingInfo = {
  enumsMap: { [key: string]: any[] };
  typeMap: { [index: string]: any };
  oneOfMap: { [index: string]: any };
};

export const isBrowser: boolean =
  typeof window !== "undefined" && typeof window.document !== "undefined";

export const isNode: boolean =
  typeof process !== "undefined" &&
  process.release &&
  process.release.name === "node";

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
  if (date instanceof DDate && date.originalDate) {
    return date.originalDate;
  }
  return date.toISOString().split(".")[0] + "Z";
}

export function buildUserAgent(
  clientName: string,
  clientVersion: string,
): string {
  let userAgent = `datadog-api-client-${clientName}/${clientVersion} (datadog-api-client ${version}; typescript; runtime unknown)`;

  if (
    typeof process !== "undefined" &&
    process.release &&
    process.release.name === "node"
  ) {
    userAgent = `datadog-api-client-${clientName}/${clientVersion} (datadog-api-client ${version}; typescript; node ${process.versions.node}; os ${process.platform}; arch ${process.arch})`;
  }

  return userAgent;
}
