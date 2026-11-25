import { UnparsedObject } from "@datadog/datadog-api-client";

import { GraphTargetNode } from "./GraphTargetNode";
import { GraphTargetPath } from "./GraphTargetPath";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type GraphTarget = GraphTargetNode | GraphTargetPath | UnparsedObject;
