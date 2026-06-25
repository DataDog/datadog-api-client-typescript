import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleIncludedResourceType } from "./ReportScheduleIncludedResourceType";

/**
 * Relationship data for the report target resource.
 */
export class ReportScheduleListResourceRelationshipData {
  /**
   * The resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type for an included report resource.
   */
  "type": ReportScheduleIncludedResourceType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReportScheduleIncludedResourceType",
      required: true,
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
    return ReportScheduleListResourceRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
