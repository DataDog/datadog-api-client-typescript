/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InputSchemaParameters } from "./InputSchemaParameters";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A list of input parameters for the workflow. These can be used as dynamic runtime values in your workflow.
 */
export class InputSchema {
  /**
   * The `InputSchema` `parameters`.
   */
  "parameters"?: Array<InputSchemaParameters>;

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
    parameters: {
      baseName: "parameters",
      type: "Array<InputSchemaParameters>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return InputSchema.attributeTypeMap;
  }

  public constructor() {}
}
