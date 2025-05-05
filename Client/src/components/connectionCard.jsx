import { useState } from "react";
import { UserPlus, UserCheck, MessageCircle, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ConnectionCard({
	user = {
		id: "1",
		name: "Sarah Johnson",
		username: "@sarahj",
		avatar: "/placeholder.svg?height=100&width=100",
		bio: "UX Designer | Coffee enthusiast | Dog lover",
		mutualConnections: 4,
		isConnected: false,
	},
	onConnect = () => {},
	onMessage = () => {},
	onViewProfile = () => {},
}) {
	const [isConnected, setIsConnected] = useState(user.isConnected);

	const handleConnect = () => {
		setIsConnected(!isConnected);
		onConnect(user.id);
	};

	return (
		<Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-md">
			<CardContent className="p-0">
				<div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-20" />
				<div className="px-6 pb-5 pt-0 relative">
					<div className="absolute -top-10 left-6">
						<Avatar className="h-20 w-20 border-4 border-background">
							<AvatarImage
								src={user.avatar || "/placeholder.svg"}
								alt={user.name}
							/>
							<AvatarFallback className="bg-muted">
								<User2 className="h-8 w-8 text-muted-foreground" />
							</AvatarFallback>
						</Avatar>
					</div>

					<div className="mt-12 space-y-2">
						<div className="flex items-start justify-between">
							<div>
								<h3 className="font-semibold text-lg">{user.name}</h3>
								<p className="text-sm text-muted-foreground">{user.username}</p>
							</div>
							{user.mutualConnections > 0 && (
								<Badge variant="secondary" className="text-xs">
									{user.mutualConnections} mutual connection
									{user.mutualConnections > 1 ? "s" : ""}
								</Badge>
							)}
						</div>

						{user.bio && (
							<p className="text-sm text-muted-foreground line-clamp-2">
								{user.bio}
							</p>
						)}
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex justify-between gap-2 p-4 pt-0 border-t">
				<Button
					variant={isConnected ? "secondary" : "default"}
					className="flex-1"
					onClick={handleConnect}>
					{isConnected ? (
						<>
							<UserCheck className="mr-2 h-4 w-4" />
							Connected
						</>
					) : (
						<>
							<UserPlus className="mr-2 h-4 w-4" />
							Connect
						</>
					)}
				</Button>

				<Button
					variant="outline"
					className="flex-1"
					onClick={() => onMessage(user.id)}>
					<MessageCircle className="mr-2 h-4 w-4" />
					Message
				</Button>
			</CardFooter>
		</Card>
	);
}
