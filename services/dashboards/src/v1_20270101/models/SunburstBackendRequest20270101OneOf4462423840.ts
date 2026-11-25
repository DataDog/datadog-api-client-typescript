import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SunburstBackendRequestAnyOfAnyOfItemRequestType4452229632 } from "./SunburstBackendRequestAnyOfAnyOfItemRequestType4452229632";
import { SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452229952 } from "./SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452229952";
import { SunburstRequestStyle } from "./SunburstRequestStyle";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstBackendRequest20270101OneOf4462423840 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ddsqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": SunburstBackendRequestAnyOfAnyOfItemRequestType4452229632;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452229952;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: SunburstRequestStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddsqlQuery: {
      baseName: "ddsql_query",
      type: "string",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "SunburstBackendRequestAnyOfAnyOfItemRequestType4452229632",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452229952",
      required: true,
    },
    style: {
      baseName: "style",
      type: "SunburstRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstBackendRequest20270101OneOf4462423840.attributeTypeMap;
  }

  public constructor() {}
}
