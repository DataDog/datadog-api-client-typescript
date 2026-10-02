/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExposureSQLModelV2DTODataAttributes } from "./ExperimentsExposureSQLModelV2DTODataAttributes";
import { ExperimentsUpdateExposureSQLModelV2RequestDataType } from "./ExperimentsUpdateExposureSQLModelV2RequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Exposure SQL model resource with its identifier and configuration.
 */
export class ExperimentsExposureSQLModelV2DTOData {
  /**
   * Query and column mappings used to read experiment assignment data.
   */
  "attributes"?: ExperimentsExposureSQLModelV2DTODataAttributes;
  /**
   * Identifier of the exposure SQL model.
   */
  "id": string;
  /**
   * Exposure SQL models resource type.
   */
  "type": ExperimentsUpdateExposureSQLModelV2RequestDataType;

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
      type: "ExperimentsExposureSQLModelV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsUpdateExposureSQLModelV2RequestDataType",
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
    return ExperimentsExposureSQLModelV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
