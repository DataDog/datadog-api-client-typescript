/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditRefreshV2DTODataAttributes } from "./ExperimentsBanditRefreshV2DTODataAttributes";
import { ExperimentsBanditRefreshV2DTODataType } from "./ExperimentsBanditRefreshV2DTODataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The refresh that started.
 */
export class ExperimentsBanditRefreshV2DTOData {
  /**
   * The bandit being refreshed.
   */
  "attributes": ExperimentsBanditRefreshV2DTODataAttributes;
  /**
   * The refresh ID. The bandit reports it as `latest_refresh`.
   */
  "id": string;
  /**
   * Bandit refresh resource type.
   */
  "type": ExperimentsBanditRefreshV2DTODataType;

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
      type: "ExperimentsBanditRefreshV2DTODataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsBanditRefreshV2DTODataType",
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
    return ExperimentsBanditRefreshV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
