/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Spec } from "./Spec";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `WorkflowListItemAttributes` object.
 */
export class WorkflowListItemAttributes {
  /**
   * When the workflow was created.
   */
  "createdAt"?: Date;
  /**
   * Description of the workflow.
   */
  "description"?: string;
  /**
   * Name of the workflow.
   */
  "name": string;
  /**
   * Set the workflow to published or unpublished. Workflows in an unpublished state will only be executable via manual runs. Automatic triggers such as Schedule will not execute the workflow until it is published.
   */
  "published"?: boolean;
  /**
   * The spec defines what the workflow does.
   */
  "spec"?: Spec;
  /**
   * Tags of the workflow.
   */
  "tags"?: Array<string>;
  /**
   * When the workflow was last updated.
   */
  "updatedAt"?: Date;

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
    createdAt: {
      baseName: "createdAt",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    published: {
      baseName: "published",
      type: "boolean",
    },
    spec: {
      baseName: "spec",
      type: "Spec",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    updatedAt: {
      baseName: "updatedAt",
      type: "Date",
      format: "date-time",
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
    return WorkflowListItemAttributes.attributeTypeMap;
  }

  public constructor() {}
}
