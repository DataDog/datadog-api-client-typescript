import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseTypeResourceAttributes } from "./CaseTypeResourceAttributes";
import { CaseTypeResourceType } from "./CaseTypeResourceType";

/**
 * A work item type that defines a classification category for work items. Each work item type can have its own custom attributes, statuses, and automation rules.
 */
export class CaseTypeResource {
  /**
   * Attributes of a work item type, which define a classification category for work items. Organizations use work item types to model different workflows (for example, Security Incident, Bug Report, Change Request).
   */
  "attributes"?: CaseTypeResourceAttributes;
  /**
   * Work item type's identifier
   */
  "id"?: string;
  /**
   * JSON:API resource type for work item types.
   */
  "type"?: CaseTypeResourceType;
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
      type: "CaseTypeResourceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CaseTypeResourceType",
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
    return CaseTypeResource.attributeTypeMap;
  }

  public constructor() {}
}
