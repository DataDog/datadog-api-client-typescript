import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DistributionPointItem } from "./DistributionPointItem";
import { DistributionPointsType } from "./DistributionPointsType";

/**
 * A distribution points metric to submit to Datadog.
 */
export class DistributionPointsSeries {
  /**
   * The name of the host that produced the distribution point metric.
   */
  "host"?: string;
  /**
   * The name of the distribution points metric.
   */
  "metric": string;
  /**
   * Points relating to the distribution point metric. All points must be tuples with timestamp and a list of values (cannot be a string). Timestamps should be in POSIX time in seconds.
   */
  "points": Array<[DistributionPointItem, DistributionPointItem]>;
  /**
   * A list of tags associated with the distribution point metric.
   */
  "tags"?: Array<string>;
  /**
   * The type of the distribution point.
   */
  "type"?: DistributionPointsType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    host: {
      baseName: "host",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    points: {
      baseName: "points",
      type: "Array<[DistributionPointItem, DistributionPointItem]>",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "DistributionPointsType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionPointsSeries.attributeTypeMap;
  }

  public constructor() {}
}
