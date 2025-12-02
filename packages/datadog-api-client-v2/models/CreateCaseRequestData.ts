/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseDataType } from "./CaseDataType";
import { CreateCaseRequestDataAttributes } from "./CreateCaseRequestDataAttributes";
import { CreateCaseRequestDataRelationships } from "./CreateCaseRequestDataRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the case to create.
 */
export class CreateCaseRequestData {
  /**
   * Attributes of the case to create.
   */
  "attributes"?: CreateCaseRequestDataAttributes;
  /**
   * The unique identifier of the case.
   */
  "id"?: string;
  /**
   * Relationships of the case to create.
   */
  "relationships"?: CreateCaseRequestDataRelationships;
  /**
   * Cases resource type.
   */
  "type": CaseDataType;

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
      type: "CreateCaseRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "CreateCaseRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseDataType",
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
    return CreateCaseRequestData.attributeTypeMap;
  }

  public constructor() {}
}
