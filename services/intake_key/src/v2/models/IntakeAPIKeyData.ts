import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntakeAPIKeyAttributes } from "./IntakeAPIKeyAttributes";
import { IntakeAPIKeyType } from "./IntakeAPIKeyType";

/**
 * An intake API key resource.
 */
export class IntakeAPIKeyData {
  /**
   * Attributes of an intake API key returned after successful authentication.
   */
  "attributes": IntakeAPIKeyAttributes;
  /**
   * A stable identifier for the intake key, scoped to the matched organization.
   */
  "id": string;
  /**
   * The resource type for an intake API key.
   */
  "type": IntakeAPIKeyType;
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
      type: "IntakeAPIKeyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntakeAPIKeyType",
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
    return IntakeAPIKeyData.attributeTypeMap;
  }

  public constructor() {}
}
