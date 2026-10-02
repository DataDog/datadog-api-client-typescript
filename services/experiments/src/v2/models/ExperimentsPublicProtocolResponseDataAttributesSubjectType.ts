import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Subject type selected by the protocol.
 */
export class ExperimentsPublicProtocolResponseDataAttributesSubjectType {
  /**
   * ID of the subject type.
   */
  "id"?: string;
  /**
   * Display name of the subject type.
   */
  "name"?: string;
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
    },
    name: {
      baseName: "name",
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
    return ExperimentsPublicProtocolResponseDataAttributesSubjectType.attributeTypeMap;
  }

  public constructor() {}
}
