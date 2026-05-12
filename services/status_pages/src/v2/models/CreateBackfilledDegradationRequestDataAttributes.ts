import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateBackfilledDegradationRequestDataAttributesUpdatesItems } from "./CreateBackfilledDegradationRequestDataAttributesUpdatesItems";

/**
 * The supported attributes for creating a backfilled degradation.
 */
export class CreateBackfilledDegradationRequestDataAttributes {
  /**
   * The title of the backfilled degradation.
   */
  "title": string;
  /**
   * The list of status updates describing the timeline of the degradation.
   */
  "updates": Array<CreateBackfilledDegradationRequestDataAttributesUpdatesItems>;
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
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    updates: {
      baseName: "updates",
      type: "Array<CreateBackfilledDegradationRequestDataAttributesUpdatesItems>",
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
    return CreateBackfilledDegradationRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
