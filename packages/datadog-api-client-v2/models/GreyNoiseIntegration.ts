/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GreyNoiseCredentials } from "./GreyNoiseCredentials";
import { GreyNoiseIntegrationType } from "./GreyNoiseIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `GreyNoiseIntegration` object.
 */
export class GreyNoiseIntegration {
  /**
   * The definition of the `GreyNoiseCredentials` object.
   */
  "credentials": GreyNoiseCredentials;
  /**
   * The definition of the `GreyNoiseIntegrationType` object.
   */
  "type": GreyNoiseIntegrationType;

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
    credentials: {
      baseName: "credentials",
      type: "GreyNoiseCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GreyNoiseIntegrationType",
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
    return GreyNoiseIntegration.attributeTypeMap;
  }

  public constructor() {}
}
