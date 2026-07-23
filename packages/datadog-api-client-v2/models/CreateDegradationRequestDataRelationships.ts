/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDegradationRequestDataRelationshipsTemplate } from "./CreateDegradationRequestDataRelationshipsTemplate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The supported relationships for creating a degradation.
 */
export class CreateDegradationRequestDataRelationships {
  /**
   * The template used to create the degradation.
   */
  "template"?: CreateDegradationRequestDataRelationshipsTemplate;

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
    template: {
      baseName: "template",
      type: "CreateDegradationRequestDataRelationshipsTemplate",
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
    return CreateDegradationRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
