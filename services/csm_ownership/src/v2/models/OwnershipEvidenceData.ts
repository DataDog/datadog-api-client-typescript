import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipEvidenceAttributes } from "./OwnershipEvidenceAttributes";
import { OwnershipEvidenceType } from "./OwnershipEvidenceType";

/**
 * The data wrapper for an ownership evidence response.
 */
export class OwnershipEvidenceData {
  /**
   * The attributes of an ownership evidence response.
   */
  "attributes": OwnershipEvidenceAttributes;
  /**
   * The identifier of the resource the evidence applies to.
   */
  "id": string;
  /**
   * The type of the ownership evidence resource. The value should always be `ownership_evidence`.
   */
  "type": OwnershipEvidenceType;
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
      type: "OwnershipEvidenceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OwnershipEvidenceType",
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
    return OwnershipEvidenceData.attributeTypeMap;
  }

  public constructor() {}
}
