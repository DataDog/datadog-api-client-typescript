/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditV2DTOData } from "./ExperimentsBanditV2DTOData";
import { ExperimentsBanditV2ReadMetaDTO } from "./ExperimentsBanditV2ReadMetaDTO";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a bandit.
 */
export class ExperimentsBanditV2DTO {
  /**
   * JSON:API resource containing a bandit.
   */
  "data": ExperimentsBanditV2DTOData;
  /**
   * Information about the bandit response.
   */
  "meta"?: ExperimentsBanditV2ReadMetaDTO;

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
    data: {
      baseName: "data",
      type: "ExperimentsBanditV2DTOData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsBanditV2ReadMetaDTO",
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
    return ExperimentsBanditV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
