/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentV2ListDTOData } from "./ExperimentsExperimentV2ListDTOData";
import { ExperimentsOffsetLinks } from "./ExperimentsOffsetLinks";
import { ExperimentsOffsetMeta } from "./ExperimentsOffsetMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a page of experiment summaries.
 */
export class ExperimentsExperimentV2ListDTOArray {
  /**
   * Experiment summaries in the current page.
   */
  "data": Array<ExperimentsExperimentV2ListDTOData>;
  /**
   * Links for navigating a paginated result set.
   */
  "links"?: ExperimentsOffsetLinks;
  /**
   * Pagination information for a list response.
   */
  "meta"?: ExperimentsOffsetMeta;

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
      type: "Array<ExperimentsExperimentV2ListDTOData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "ExperimentsOffsetLinks",
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsOffsetMeta",
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
    return ExperimentsExperimentV2ListDTOArray.attributeTypeMap;
  }

  public constructor() {}
}
