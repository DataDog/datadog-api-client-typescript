/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsSubjectTypeV2DTODataAttributes } from "./ExperimentsSubjectTypeV2DTODataAttributes";
import { ExperimentsSubjectTypeV2DTODataType } from "./ExperimentsSubjectTypeV2DTODataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource containing the subject type identity and fields.
 */
export class ExperimentsSubjectTypeV2DTOData {
  /**
   * Details of the subject type.
   */
  "attributes"?: ExperimentsSubjectTypeV2DTODataAttributes;
  /**
   * ID of the subject type.
   */
  "id": string;
  /**
   * Subject types resource type.
   */
  "type": ExperimentsSubjectTypeV2DTODataType;

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
      type: "ExperimentsSubjectTypeV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsSubjectTypeV2DTODataType",
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
    return ExperimentsSubjectTypeV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
