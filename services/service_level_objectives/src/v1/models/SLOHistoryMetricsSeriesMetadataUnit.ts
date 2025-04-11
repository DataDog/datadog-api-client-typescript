import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An Object of metric units.
 */
export class SLOHistoryMetricsSeriesMetadataUnit {
  /**
   * The family of metric unit, for example `bytes` is the family for `kibibyte`, `byte`, and `bit` units.
   */
  "family"?: string;
  /**
   * The ID of the metric unit.
   */
  "id"?: number;
  /**
   * The unit of the metric, for instance `byte`.
   */
  "name"?: string;
  /**
   * The plural Unit of metric, for instance `bytes`.
   */
  "plural"?: string;
  /**
   * The scale factor of metric unit, for instance `1.0`.
   */
  "scaleFactor"?: number;
  /**
   * A shorter and abbreviated version of the metric unit, for instance `B`.
   */
  "shortName"?: string;
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
    family: {
      baseName: "family",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    plural: {
      baseName: "plural",
      type: "string",
    },
    scaleFactor: {
      baseName: "scale_factor",
      type: "number",
      format: "double",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
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
    return SLOHistoryMetricsSeriesMetadataUnit.attributeTypeMap;
  }

  public constructor() {}
}
