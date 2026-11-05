/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewaySupportedOperation } from "./AiGatewaySupportedOperation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes used to update a model catalog entry.
 */
export class AiGatewayModelUpdateAttributes {
  /**
   * Model identifier sent to the provider.
   */
  "modelIdWire"?: string;
  /**
   * Operations supported by the model.
   */
  "supportedOperations"?: Array<AiGatewaySupportedOperation>;

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
    modelIdWire: {
      baseName: "model_id_wire",
      type: "string",
    },
    supportedOperations: {
      baseName: "supported_operations",
      type: "Array<AiGatewaySupportedOperation>",
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
    return AiGatewayModelUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
