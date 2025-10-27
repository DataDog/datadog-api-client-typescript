import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JobDefinition } from "./JobDefinition";
import { JobDefinitionFromRule } from "./JobDefinitionFromRule";

/**
 * Run a threat hunting job request.
 */
export class RunThreatHuntingJobRequestAttributes {
  /**
   * Definition of a threat hunting job based on a security monitoring rule.
   */
  "fromRule"?: JobDefinitionFromRule;
  /**
   * Request ID.
   */
  "id"?: string;
  /**
   * Definition of a threat hunting job.
   */
  "jobDefinition"?: JobDefinition;
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
    fromRule: {
      baseName: "fromRule",
      type: "JobDefinitionFromRule",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    jobDefinition: {
      baseName: "jobDefinition",
      type: "JobDefinition",
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
    return RunThreatHuntingJobRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
