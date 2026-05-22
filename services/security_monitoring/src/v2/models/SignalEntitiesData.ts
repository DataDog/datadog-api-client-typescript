import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SignalEntitiesAttributes } from "./SignalEntitiesAttributes";
import { SignalEntitiesType } from "./SignalEntitiesType";

/**
 * Entities related to a security signal.
 */
export class SignalEntitiesData {
  /**
   * Attributes containing the entities related to the signal.
   */
  "attributes": SignalEntitiesAttributes;
  /**
   * The signal ID the entities are associated with.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `entities`.
   */
  "type": SignalEntitiesType;
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
      type: "SignalEntitiesAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SignalEntitiesType",
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
    return SignalEntitiesData.attributeTypeMap;
  }

  public constructor() {}
}
