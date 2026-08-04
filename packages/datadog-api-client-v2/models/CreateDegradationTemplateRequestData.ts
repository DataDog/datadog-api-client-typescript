/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDegradationTemplateRequestDataAttributes } from "./CreateDegradationTemplateRequestDataAttributes";
import { PatchDegradationTemplateRequestDataType } from "./PatchDegradationTemplateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object for creating a degradation template.
 */
export class CreateDegradationTemplateRequestData {
  /**
   * The attributes for creating a degradation template.
   */
  "attributes"?: CreateDegradationTemplateRequestDataAttributes;
  /**
   * Degradation templates resource type.
   */
  "type": PatchDegradationTemplateRequestDataType;

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
      type: "CreateDegradationTemplateRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "PatchDegradationTemplateRequestDataType",
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
    return CreateDegradationTemplateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
