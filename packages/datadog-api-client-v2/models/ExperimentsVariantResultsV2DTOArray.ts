/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentResultsV2MetaDTO } from "./ExperimentsExperimentResultsV2MetaDTO";
import { ExperimentsVariantResultsV2DTOData } from "./ExperimentsVariantResultsV2DTOData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of variant result resources.
 */
export class ExperimentsVariantResultsV2DTOArray {
  /**
   * Resources returned in this response.
   */
  "data": Array<ExperimentsVariantResultsV2DTOData>;
  /**
   * Information about when experiment results were updated and whether they are stale.
   */
  "meta"?: ExperimentsExperimentResultsV2MetaDTO;

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
      type: "Array<ExperimentsVariantResultsV2DTOData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsExperimentResultsV2MetaDTO",
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
    return ExperimentsVariantResultsV2DTOArray.attributeTypeMap;
  }

  public constructor() {}
}
