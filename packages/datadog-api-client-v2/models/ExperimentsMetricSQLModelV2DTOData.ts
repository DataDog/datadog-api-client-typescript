/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsMetricSQLModelV2DTODataAttributes } from "./ExperimentsMetricSQLModelV2DTODataAttributes";
import { ExperimentsUpdateMetricSQLModelV2RequestDataType } from "./ExperimentsUpdateMetricSQLModelV2RequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource containing the metric SQL model identity and fields.
 */
export class ExperimentsMetricSQLModelV2DTOData {
  /**
   * Details of the metric SQL model.
   */
  "attributes"?: ExperimentsMetricSQLModelV2DTODataAttributes;
  /**
   * ID of the metric SQL model.
   */
  "id": string;
  /**
   * Metric SQL models resource type.
   */
  "type": ExperimentsUpdateMetricSQLModelV2RequestDataType;

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
      type: "ExperimentsMetricSQLModelV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsUpdateMetricSQLModelV2RequestDataType",
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
    return ExperimentsMetricSQLModelV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
