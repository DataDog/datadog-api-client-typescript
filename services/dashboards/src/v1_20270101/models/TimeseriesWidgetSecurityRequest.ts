import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogQueryDefinition } from "./LogQueryDefinition";
import { TimeseriesRequestStyle } from "./TimeseriesRequestStyle";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { WidgetDisplayType } from "./WidgetDisplayType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesWidgetSecurityRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "displayType"?: WidgetDisplayType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metadata"?: Array<TimeseriesWidgetExpressionAlias>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "onRightYaxis"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "securityQuery": LogQueryDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: TimeseriesRequestStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    displayType: {
      baseName: "display_type",
      type: "WidgetDisplayType",
    },
    metadata: {
      baseName: "metadata",
      type: "Array<TimeseriesWidgetExpressionAlias>",
    },
    onRightYaxis: {
      baseName: "on_right_yaxis",
      type: "boolean",
    },
    securityQuery: {
      baseName: "security_query",
      type: "LogQueryDefinition",
      required: true,
    },
    style: {
      baseName: "style",
      type: "TimeseriesRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesWidgetSecurityRequest.attributeTypeMap;
  }

  public constructor() {}
}
