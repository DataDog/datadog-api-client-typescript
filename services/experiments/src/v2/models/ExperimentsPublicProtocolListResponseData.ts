import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPublicProtocolListResponseDataAttributes } from "./ExperimentsPublicProtocolListResponseDataAttributes";
import { ExperimentsPublicProtocolResponseDataType } from "./ExperimentsPublicProtocolResponseDataType";

/**
 * JSON:API resource containing the protocol identity and fields.
 */
export class ExperimentsPublicProtocolListResponseData {
  /**
   * Summary of the protocol and its selected subject type and primary metric.
   */
  "attributes"?: ExperimentsPublicProtocolListResponseDataAttributes;
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
      type: "ExperimentsPublicProtocolListResponseDataAttributes",
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
    return ExperimentsPublicProtocolListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
