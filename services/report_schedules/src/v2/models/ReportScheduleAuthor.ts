import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleAuthorAttributes } from "./ReportScheduleAuthorAttributes";
import { ReportScheduleAuthorType } from "./ReportScheduleAuthorType";

/**
 * A user included as a related JSON:API resource.
 */
export class ReportScheduleAuthor {
  /**
   * Attributes of the report author.
   */
  "attributes": ReportScheduleAuthorAttributes;
  /**
   * The user UUID.
   */
  "id": string;
  /**
   * JSON:API resource type for the included report author.
   */
  "type": ReportScheduleAuthorType;
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
    attributes: {
      baseName: "attributes",
      type: "ReportScheduleAuthorAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReportScheduleAuthorType",
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
    return ReportScheduleAuthor.attributeTypeMap;
  }

  public constructor() {}
}
