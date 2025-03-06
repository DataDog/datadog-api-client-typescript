/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OutputSchemaParameters } from "./OutputSchemaParameters";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A list of output parameters for the workflow.
 */
export class OutputSchema {
  /**
   * The `OutputSchema` `parameters`.
   */
  "parameters"?: Array<OutputSchemaParameters>;

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
      type: "Array<OutputSchemaParameters>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OutputSchema.attributeTypeMap;
  }

  public constructor() {}
}
