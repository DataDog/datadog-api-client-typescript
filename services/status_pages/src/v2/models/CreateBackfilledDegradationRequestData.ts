import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateBackfilledDegradationRequestDataAttributes } from "./CreateBackfilledDegradationRequestDataAttributes";
import { CreateBackfilledDegradationRequestDataRelationships } from "./CreateBackfilledDegradationRequestDataRelationships";
import { PatchDegradationRequestDataType } from "./PatchDegradationRequestDataType";

/**
 * The data object for creating a backfilled degradation.
 */
export class CreateBackfilledDegradationRequestData {
  /**
   * The supported attributes for creating a backfilled degradation.
   */
  "attributes"?: CreateBackfilledDegradationRequestDataAttributes;
  /**
   * The supported relationships for creating a backfilled degradation.
   */
  "relationships"?: CreateBackfilledDegradationRequestDataRelationships;
  /**
   * Degradations resource type.
   */
  "type": PatchDegradationRequestDataType;
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
      type: "CreateBackfilledDegradationRequestDataAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "CreateBackfilledDegradationRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "PatchDegradationRequestDataType",
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
    return CreateBackfilledDegradationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
