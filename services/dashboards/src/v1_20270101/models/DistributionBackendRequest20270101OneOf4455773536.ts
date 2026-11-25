import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DistributionBackendRequestAnyOfAnyOfItemQuery } from "./DistributionBackendRequestAnyOfAnyOfItemQuery";
import { DistributionBackendRequestAnyOfAnyOfItemRequestType } from "./DistributionBackendRequestAnyOfAnyOfItemRequestType";
import { RequestStyle } from "./RequestStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequest20270101OneOf4455773536 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DistributionBackendRequestAnyOfAnyOfItemQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": DistributionBackendRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: RequestStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    query: {
      baseName: "query",
      type: "DistributionBackendRequestAnyOfAnyOfItemQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "DistributionBackendRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    style: {
      baseName: "style",
      type: "RequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionBackendRequest20270101OneOf4455773536.attributeTypeMap;
  }

  public constructor() {}
}
