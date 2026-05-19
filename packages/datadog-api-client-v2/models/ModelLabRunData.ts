/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ModelLabRunAttributes } from "./ModelLabRunAttributes";
import { ModelLabRunType } from "./ModelLabRunType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Model Lab run JSON:API resource object.
 */
export class ModelLabRunData {
  /**
   * Attributes of a Model Lab run.
   */
  "attributes": ModelLabRunAttributes;
  /**
   * The unique identifier of the run.
   */
  "id": string;
  /**
   * The JSON:API type for a Model Lab run resource.
   */
  "type": ModelLabRunType;

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
      type: "ModelLabRunAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ModelLabRunType",
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
    return ModelLabRunData.attributeTypeMap;
  }

  public constructor() {}
}
