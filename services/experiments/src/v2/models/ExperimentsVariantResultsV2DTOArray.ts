import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentResultsV2MetaDTO } from "./ExperimentsExperimentResultsV2MetaDTO";
import { ExperimentsVariantResultsV2DTOData } from "./ExperimentsVariantResultsV2DTOData";

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
