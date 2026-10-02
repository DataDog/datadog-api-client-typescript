/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPublicProtocolResponseDataAttributes } from "./ExperimentsPublicProtocolResponseDataAttributes";
import { ExperimentsPublicProtocolResponseDataType } from "./ExperimentsPublicProtocolResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
