import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPublicProtocolResponseDataAttributes } from "./ExperimentsPublicProtocolResponseDataAttributes";
import { ExperimentsPublicProtocolResponseDataType } from "./ExperimentsPublicProtocolResponseDataType";

/**
 * JSON:API resource containing the protocol identity and fields.
 */
export class ExperimentsPublicProtocolResponseData {
  /**
   * Settings and defaults supplied by the protocol.
   */
  "attributes"?: ExperimentsPublicProtocolResponseDataAttributes;
  /**
   * ID of the protocol.
   */
  "id": string;
  /**
   * Protocols resource type.
   */
  "type": ExperimentsPublicProtocolResponseDataType;
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
      type: "ExperimentsPublicProtocolResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPublicProtocolResponseDataType",
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
    return ExperimentsPublicProtocolResponseData.attributeTypeMap;
  }

  public constructor() {}
}
